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
    return(
        <>
       
     { items.map((item: TimelineItm) => (
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