import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MultasProvider } from '../../providers/multas/multas';

/**
 * Generated class for the MultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multa',
  templateUrl: 'multa.html',
})
export class MultaPage {

  public multa = {
    descricao_multa: "",
    placa_veiculo_multa: "",
    status_multa: "0",
    url_imagem_multa: "",
    id_usuario: 1,
    id_oficial: 1
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private multaProvider: MultasProvider, private toastCtrl: ToastController) {
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.multa.url_imagem_multa = base64Image;
      this.multa.url_imagem_multa = imageData;
    }, (err) => {
      console.log(err);
    });
  }

  salvarMulta(multa){
    this.multaProvider.criarMulta(this.multa).then((result: any) => {
      console.log(result);
      let toast = this.toastCtrl.create({
        message: 'Multa cadastrada com sucesso!',
        duration: 3000  
      });
      toast.present();
    }).catch((error: any) => {
      console.log(error);
      let toast = this.toastCtrl.create({
        message: 'Erro ao cadastrar multa!',
        duration: 3000  
      });
      toast.present();
    })
  }
}
