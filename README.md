

# Crearem una web en React des de zero, incloent-hi tots els passos necessaris, per a passar després a crear els nostres primers components i fer ús de props. Després, modificarem la pàgina per convertir-la en una web interactiva que mostrarà una història. Aplicarem les tècniques fonamentals per aplicar estils a la web i afegirem accions que l'usuari/ària pugui interactuar amb la nostra aplicació.
Notes
Tens les següents indicacions del responsable front-end:

- Crearem la base del projecte sobre la qual treballar executant el comando: npx create-react-app nom_del_projecte. 

 Per saber més

Tens més informació d'aquest pas en aquest enllaç ->https://es.reactjs.org/docs/create-a-new-react-app.html

- Si encara no has preparat el teu ordinador per a poder treballar amb React, mira't l'Annex I del document, per a fer-lo.

- Com de moment no consumim dades d'un servidor usant una API, treballarem amb dades hardcodeades de l'aplicació. 

- Està prohibit copiar el codi, ja que d'aquesta manera no s'aprèn res. A més com podràs observar, el segon lliurament de l'sprint 5 és una miniprova de nivell amb el mentor/a,  en la qual hauràs de demostrar en directe que has adquirit els conceptes de Javascript. No et preocupis, si treballes els lliuraments, no tindràs problemes.

Nivell 1

- Exercici 1
Com ja hem indicat, una aplicació amb React està composta de components, diguem que cada component és una peça del puzle, tenint aquests components un propòsit únic i obvi.

Pots crear tants components com vulguis, i sempre que ho consideris necessari, pots utilitzar un o diversos component dins d'un altre. 

Per exemple, si féssim una landing page amb React, dins del component principal (base de la web) podríem importar el component header, menú, formulari de contacte….

En aquest primer exercici, crearem un component que s'encarregarà de renderitzar una frase, i l’importarem i usarem en el component principal App.

Has de dur a terme els següents passos:

1. Crear la carpeta components.

2. Crear la carpeta escena dins de la carpeta components.

3. Dins de la carpeta escena implementarem el primer component. Per a això has de crear el fitxer Escena.js. Aquest primer component només ha de retornar el següent string:

"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"

4. Ja tenim el nostre primer component creat, però encara no es mostrarà la frase. Per a això farem servir el nostre flamant component Escena. En el return del component app has d'utilitzar el component Escena.

- Exercici 2
GENIAL!, ja tens el primer component creat i funcionant. De moment només es mostra una frase, en aquest exercici farem que es mostrin totes les frases de la història. 

Per a això, has de dur a terme les següents tasques:

1. Llegirem les dades d'un arxiu JSON o JS, amb els textos de la història en el component App:

[
  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  "L'heroi va decidir travessar la porta que el portava a casa",
  "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
]
2. S'ha de passar per props cadascun dels textos de la història al component Escena. (El component escena renderitzarà una sola línia de text).

3. Modificarem el component Escena per a mostrar totes les línies de text obtingudes del component pare App mitjançant props.

- Exercici 3
És moment d'aplicar estils al nostre component Escena. Has de maquetar aquest component utilitzant styled-components:

- Exercici 4
Mostrarem totes les línies de l’aplicació, però ressaltarem només una de cada vegada, que anirà canviant a mesura que premem els botons d’avançar o retrocedir:

Nivell 2

- Exercici 5
ENHORABONA!, ja has creat la base del projecte!, ja es pot navegar per la història indicant a l'usuari/ària en què punt es troba. 

Seria convenient mostrar a l'usuari/ària una pantalla inicial de benvinguda, que contingui la descripció del projecte i un botó de començar. En aquest exercici has d'usar el renderitzat condicional.

Ajuda: Com implementar el renderitzat condicional? Mitjançant una variable guardada en el state del component principal App, seràs capaç de mostrar la pantalla de benvinguda, i una vegada que aquesta variable canviï, ocultar la pantalla de benvinguda i mostrar la pantalla amb la història.

Nivell 3

- Exercici 6
Ja només et falta modificar la imatge de fons segons l'usuari/ària vagi canviant de frase. 

Modificar el fitxer JSON i convertir-lo en un fitxer JS amb un array d'objectes. Cada objecte tindrà dues propietats: txt i img:

- txt serà la propietat que emmagatzemarà el text de l'escena.

- img serà la propietat que emmagatzemarà la imatge de fons que es veurà a la pantalla.

Pots descarregar-te la carpeta amb les imatges de fons, en aquest -> enllaç.

Com en l'array ja tens la frase a mostrar juntament amb la seva imatge, et resultarà senzill dinamitzar l'atribut "src" de la imatge.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
