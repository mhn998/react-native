import * as imageMainpulator from "expo-image-manipulator";
import * as fireBaseStorage from "firebase/storage";

export const uploadPhoto = (image) => {
  return async (dispatch) => {
    let metadata = {
      cachedControl: "public , max-age=5000 , s-maxage=600",
    };
    let fileType = image.uri.split("/");
    let length = fileType.length - 1;
    fileType = fileType[length].split(".")[1];
    const resize = await imageMainpulator.manipulateAsync(image.uri, [], {
      format:
        imageMainpulator.SaveFormat[
          fileType == "jpeg" || "jpg" ? "JPEG" : "PNG"
        ],
      compress: 0.5,
      base64: false,
    });
    const res = await fetch(resize.uri);
    const blob = res.blob();
    const uploadTask = fireBaseStorage
      .ref()
      .child(`images/${uuid.v4()}`)
      .put(blob, metadata);
    const downloadURL = await uploadTask.ref.getDownloadURL();

    return downloadURL;
  };
};
