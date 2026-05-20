// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = 'free';

switch(user) {
  case 'free':
    console.log('Acesso limitado');
    break;
  case 'premium':
    console.log('Acesso total ao App');
    break;
  case 'super premium':
    console.log('acesso toal ao app e bônus');
    break;
  default:
    console.log('tipo de user desconhecido');
    break;
}