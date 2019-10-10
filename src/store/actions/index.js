import { USER, DATA_FETCHED, DATA_FAILED, FILTER, ADD_VERB } from '../constants'
import { Api } from '../../services'

const userChanged = user => {
  return {
    type: USER,
    user
  }
}

const getData = token => async dispatch => {
  /** Доделать, когда будет готова верстка списка * */
  function onSuccess(data) {
    dispatch({ type: DATA_FETCHED, data })
    return data
  }
  function onError(error) {
    dispatch({ type: DATA_FAILED, error })
  }
  try {
    const { ApiService, config } = Api
    const data = await ApiService.getData(
      config.url.dataUser
    ) /* {
            userVerb: [],
            defaultVerb: [
                {
                    "id": "1",
                    "sendStatus": "sinc",
                    "title": "être",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": {
                                        "i": "suis",
                                        "you": "es",
                                        "he_she": "est",
                                        "we": "sommes",
                                        "your": "êtes",
                                        "they": "sont"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                }
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "2",
                    "sendStatus": "sinc",
                    "title": "êtres",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": {
                                        "i": "suis",
                                        "you": "es",
                                        "he_she": "est",
                                        "we": "sommes",
                                        "your": "êtes",
                                        "they": "sont"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "2",
                    "sendStatus": "sinc",
                    "title": "avoir",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": {
                                        "i": "étais",
                                        "you": "étais",
                                        "he_she": "était",
                                        "we": "étions",
                                        "your": "étiez",
                                        "they": "étaient"
                                    }
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "3",
                    "sendStatus": "sinc",
                    "title": "faire",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "4",
                    "sendStatus": "sinc",
                    "title": "aller",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "5",
                    "sendStatus": "sinc",
                    "title": "pouvoir",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "6",
                    "sendStatus": "sinc",
                    "title": "savoir",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "7",
                    "sendStatus": "sinc",
                    "title": "dire",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "8",
                    "sendStatus": "sinc",
                    "title": "vouloir",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "9",
                    "sendStatus": "sinc",
                    "title": "lire",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                },
                {
                    "id": "10",
                    "sendStatus": "sinc",
                    "title": "aimer",
                    "inclinations": [
                        {
                            "title": "Indicatif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Indicatif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Indicatif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Indicatif passé simple",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Indicatif futur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "5",
                                    "title": "Indicatif passé composé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "6",
                                    "title": "Indicatif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "7",
                                    "title": "Indicatif passé antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "title": "Indicatif futur antérieur",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "indicatif"
                        },
                        {
                            "title": "Subjonctif",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Subjonctif présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Subjonctif imparfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "title": "Subjonctif passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "title": "Subjonctif plus-que-parfait",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                }
                            ],
                            "name": "subjonctif"
                        },
                        {
                            "title": "Conditionnel",
                            "conjugations": [
                                {
                                    "id": "1",
                                    "title": "Conditionnel présent",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "title": "Conditionnel passé",
                                    "data": [
                                        {
                                            "name": "i",
                                            "value": "1"
                                        },
                                        {
                                            "name": "you",
                                            "value": "2"
                                        },
                                        {
                                            "name": "he/she",
                                            "value": "3"
                                        },
                                        {
                                            "name": "we",
                                            "value": "4"
                                        },
                                        {
                                            "name": "your",
                                            "value": "5"
                                        },
                                        {
                                            "name": "they",
                                            "value": "6"
                                        }
                                    ]
                                },
                            ],
                            "name": "conditionnel"
                        }
                    ]

                }
            ]
        } */
    return onSuccess(data)
  } catch (error) {
    return onError(error)
  }
}

const getFilterChanged = filter => {
  return {
    type: FILTER,
    filter
  }
}

const addVerbActions = data => {
  return {
    type: ADD_VERB,
    data
  }
}

export { userChanged, getData, getFilterChanged, addVerbActions }
