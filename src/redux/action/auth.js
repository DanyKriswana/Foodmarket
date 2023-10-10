import axios from "axios";
import { showMessage } from "../../utils";
import { setLoading } from "./global";

const API_HOST = {
    url: 'https://foodmarket-backend.buildwithangga.id/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      console.log('data success: ', res.data);
      if (photoReducer.isUploadPhoto){
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer)

        axios.post(
          `${API_HOST.url}/user/photo`,
          photoForUpload,
          {
            headers: {
              Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
              'Content-Type': 'multipart/form-data',
            }
          })
          .then((resUpload) => {
            console.log('Success upload: ', resUpload)
          })
          .catch(err => {
            showMessage('Upload photo tidak berhasil')
          })
      }
      dispatch(setLoading(false))
      showMessage('Register Success', 'success');
      navigation.replace('SuccessSignUp');
    })
    .catch(error => {
      dispatch(setLoading(false))
      showMessage(error?.response?.data?.message)
      if(error.response.status === 422){
        console.error("Validation errors: ", error.response.data.message.error)
      } else{
        console.error("Error", error.message)
      }
    })
}