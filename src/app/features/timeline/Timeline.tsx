import { ReactComponent as DataIcon} from '../../../assets/ux/data.svg';
import { TimelineItm } from '../../interfaces/TimelineItem';
import { TimelineItem } from './timeline-item/TimelineItem';
export const Timeline = () => {

    const items = [
        {
            "id":"111",
            "title": "Irrigation",
            "avatar": "irrigation.png",
            "date": "15 May 2023",
            "comment": "the rain in Spain stays mainly ",
            "media": [
                {
                    "src":"snimka.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"222",
            "title": "Irrigation",
            "avatar": "irrigation.png",
            "date": "1 May 2023",
            "comment": "the rain in Spain stays mainly ",
            "media": [
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"333",
            "title": "Irrigation",
            "avatar": "irrigation.png",
            "date": "15 April 2023",
            "comment": "the rain in Spain stays mainly ",
            "media": [
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"444",
            "title": "Irrigation",
            "avatar": "irrigation.png",
            "date": "1 April 2023",
            "comment": "the rain in Spain stays mainly ",
            "media": [
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"555",
            "title": "Irrigation",
            "avatar": "irrigation.png",
            "date": "15 March 2023",
            "comment": "the rain in Spain stays mainly ",
            "media": [
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                },
                {
                    "src":"snimka.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        }
    ]

    const hobbit = [
        {
            "id":"123",
            "title": "Transport",
            "avatar": "irrigation.png",
            "date": "Aug 19",
            "comment": "Crates loaded and sent to the hungry crowd in Jolly Roger.",
            "media": [
               
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"134",
            "title": "Harvest",
            "avatar": "irrigation.png",
            "date": "Aug 18",
            "comment": "Harvested two crates, ready to go",
            "media": [
               {
                "src": "harvest.jpg"
               }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"234",
            "title": "Ripe fruit",
            "avatar": "irrigation.png",
            "date": "Aug 5",
            "comment": "Slowly getting ripe",
            "media": [
               {
                "src": "ripe-fruit.jpg"
               }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"434",
            "title": "Green fruit",
            "avatar": "irrigation.png",
            "date": "Jul 23",
            "comment": "This view makes me happy!",
            "media": [
               {
                "src": "green-2.jpg"
               }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"534",
            "title": "Green fruit",
            "avatar": "irrigation.png",
            "date": "Jul 12",
            "comment": "Green fruit getting bigger",
            "media": [
               {
                "src": "green-1.jpg"
               }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"634",
            "title": "Transplanting",
            "avatar": "irrigation.png",
            "date": "May 30",
            "comment": "Plot 4A - all is ready!",
            "media": [
               {
                "src": "transplanting.jpg"
               }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"111",
            "title": "Seedlings",
            "avatar": "irrigation.png",
            "date": "Mar 16",
            "comment": "The seedlings are growing, spring is coming! ",
            "media": [
                {
                    "src":"seedlings-4.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"222",
            "title": "Weather check",
            "avatar": "irrigation.png",
            "date": "Mar 13",
            "comment": "A beautiful cold dawn ",
            "media": [
                {
                    "src":"cold-dawn.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"333",
            "title": "Thinning",
            "avatar": "irrigation.png",
            "date": "Mar 3",
            "comment": "Time to select the strongest seedlings, two per cell",
            "media": [
                {
                    "src":"thinning.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"444",
            "title": "Seedlings",
            "avatar": "irrigation.png",
            "date": "Feb 28",
            "comment": "The happy life of tomato seedlings : )",
            "media": [
                {
                    "src":"seedlings-3.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"555",
            "title": "Seedlings",
            "avatar": "irrigation.png",
            "date": "Feb 26",
            "comment": "Tomatoes ready to start their new life",
            "media": [
                {
                    "src":"seedlings-1.jpg"
                },
                {
                    "src":"seedlings-2.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"6666",
            "title": "Planting",
            "avatar": "irrigation.png",
            "date": "Feb 10",
            "comment": "Still raining like crazy, but I am in the shed planting tomatoes.",
            "media": [
                {
                    "src":"planting.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"777",
            "title": "Cold frame",
            "avatar": "irrigation.png",
            "date": "Feb 9",
            "comment": "Despite the rain earlier the cold frames are ready!!! ",
            "media": [
                {
                    "src":"cold-frame-2.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"888",
            "title": "Cold frame",
            "avatar": "irrigation.png",
            "date": "Jan 27",
            "comment": "Cold frames looking good and the weather is super ",
            "media": [
                {
                    "src":"cold-frame-1.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"999",
            "title": "Cold frame",
            "avatar": "irrigation.png",
            "date": "Jan 26",
            "comment": "Starting work on the cold frames ",
            "media": [
                {
                    "src":"cold-frame-0.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
        {
            "id":"101010",
            "title": "Weather check",
            "avatar": "irrigation.png",
            "date": "Feb 9",
            "comment": "Frosty hey?",
            "media": [
                {
                    "src":"frost.jpg"
                }
            ],
            "activity": {
                "name": "irrigation",
                "input": [
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                },
                {
                    "name":"more water",
                    "quantity": "4",
                    "unit": "m3"
                }
                ],
                "output":[ 
                    {
                    "name":"water",
                    "quantity": "4",
                    "unit": "m3"
                    }
                ],
                "data": [ 
                    {
                    "name": "soil moisture",
                    "value": "3",
                    "unit": "l/m3",
                    "instrument": "meter"
                    }
                ], 
                "equipment": [
                    {
                    "type": "markuchitu",
                    "model": "plastic 34mm",
                    "year": "1944"
                    }
                ],
                "document": [
                    {
                    "src": "somedoc.pdf"
                    },
                    {
                        "src": "someotherdoc.pdf"
                    }
                ]
            }
        },
    ]
    return(
        <>
       
     { hobbit.map((item: TimelineItm) => (
        <TimelineItem key={item.id} item={item}/>
      ))}
       {/* <TimelineItem media="1" />
       <TimelineItem media="2" />
       <TimelineItem media="3" />
       <TimelineItem media="4" />
       <TimelineItem media="5" /> */}
       
            
           
           </>
    )
}