import { Row, Col } from "react-bootstrap"

export const GreenPractices = () => {
    return(
        <>
        <div className="green-practices">
            <div className="practice">
                <p className="fw-bold">Companion plants</p>

                <Row>
                    <Col>
                    <img className="w-100p d-block m-auto" src="../../../imgs/chibi-flower.jpg" />
                    </Col>
                    <Col>
                    <div>
                    Basil</div>
                    <div>
                    Dianthus
                    </div>
                    <div>
                Nasturium
                </div>
                    <div>
                    Marigolds 
                    </div>
                    <div>
                    Tagetes
                    </div>
                    <div>
                    Pentas
                    </div>
                    <div>
                Carnations
                </div>
                    <div>
            Verbenas
                    </div>
                    </Col>
                </Row>
            </div>

            <div className="practice">
            <p className="fw-bold">Soil</p>
            <img className="w-100 m-auto" src="../../../imgs/soil.jpg" />
            <p className="mt-3">Soil Organic Matter (2021) 4.9%</p>

<p>Compost added prior to planting in the top 15 cm.</p>

<p>Vegetal covers sown in December 2021. Winter covers reduce water erosion, contribute to soil organic matter contents and break weed cycles.</p>
            
            </div>
            <div className="practice">
            <p className="fw-bold">Biodiversity</p>

            <img className="w-200p d-block m-auto" src="../../../imgs/chibi-bird.jpg" />
            <p>Flower margins - provide protection, foraging, nesting shelter and refuge for insects  and birds

            </p><p>Hedges - support structural diversity, act as climate regulating and as a windbreak 

            </p><p>Water pond - an important habitat and refuge 
            
            </p>
            </div>
            <div className="practice">
                <p className="fw-bold">Irrigation</p>

                <Row>
                    <Col>
                    <img className="w-100p d-block m-auto" src="../../../imgs/markuchitu.jpg" />
                    </Col>
                    <Col>
                    Drip irrigation - efficient, locates the water directly near the root system, allows stress-free moisture conditions to be maintained, avoids deep leakage of nutrients, avoids soil compaction
                    </Col>
                </Row>
            </div>

        </div>
        </>
    )
}