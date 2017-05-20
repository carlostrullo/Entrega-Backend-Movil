# Entrega-Frontend-Movil

Para utilizar el proyecto siga las siguientes instrucciones. Se parte del hecho que el desarrollador o quien vaya a probar el proyecto ya tiene un emulador de Android o iOS instalado en su computadora, react-native instalado y también que utiliza un sistema operativo ubuntu o macOS, además de tener el backend corriendo o acceso a los enpoints de este proyecto. En caso contrario por favor siga este tutorial https://facebook.github.io/react-native/docs/getting-started.html

1. Inicialice el emulador (en caso de ser probado en android).

2. Desde una terminal cree un directorio para clonar el proyecto y ejecute git clone https://github.com/carlostrullo/Entrega-Frontend-Movil.

3. Una vez clonado el proyecto en el directorio, ejecute cd Entrega-Frontend-Movil.

4. En la carpeta src abra y modifique el archivo api-client. Si tiene el backend corriendo de manera local solo cambie la dirección ip por la de su computadora en la constante UrlCategory, si tiene acceso a los enpoints reemplace esta parte de la constante http://192.168.1.34:8080 por la dirección de los enpoints.

5. Luego regrese al directorio Entrega-Frontend-Movil y corra el proyecto con el comando react-native run-android o react-native run-ios (en el caso de iOS).

6. En caso de tener el "error calling AppRegistry.runApplication" cierre la aplicación en el emulador, ejecute cd android y luego npm start, busque el acceso directo a la aplicación en el emulador e ingrese a ella.
