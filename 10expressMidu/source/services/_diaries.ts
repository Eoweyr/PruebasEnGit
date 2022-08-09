/* Esta forma es correcta pero es más recomendable trabajar sobre el json por en coste en runtime al tener que pasar de este modo el js
a json y viceversa */

/* Ponemos la barra baja _ en el nombre del archivo para que typescript no lo tenga en cuenta */
/* Esta opción es valida pero preferible la que hemos hecho desde el principio. Solución idilica, si tenemos el json, tener en cuenta tiempo en runtime */

import { DiaryEntry, Visibility, Weather } from "../types";

const diaryEntries: Array<DiaryEntry> = [
    {
      "id": 1,
      "date": "2017-01-01",
      "weather": Weather.Rainy,
      "visibility": Visibility.Poor,
      "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
      "id": 2,
      "date": "2017-04-01",
      "weather": Weather.Sunny,
      "visibility": Visibility.Good,
      "comment": "Everything went better than expected, I'm learning much"
    }
  ] 

export default diaryEntries