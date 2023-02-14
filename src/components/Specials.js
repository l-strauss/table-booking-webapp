import { Link } from "react-router-dom"

const Specials = () => {
    return (
        <div className="specials">
            <div className="specials-header">
                <h2>This weeks specials!</h2>
                <button type="button">Online Menu</button>
            </div>
            <div className="cards">
                <div className="card">
                    <img src="./greek salad.jpg"/>
                    <div className="card-text">
                        <div>
                            <h4>Greek salad</h4>
                            <span>$12.99</span>
                        </div>
                        <p>The famous greek sala of scrisoy lettuce, pepers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <Link href="#">Order a delivery</Link>
                    </div>
                </div>
                <div className="card">
                    <img src="./bruchetta.svg"/>
                    <div className="card-text">
                        <h4>Bruchetta</h4>
                        <span>$5.99</span>
                        <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <Link href="#">Order a delivery</Link>
                    </div>
                </div>
                <div className="card">
                    <img src="./lemon dessert.jpg"/>
                    <div className="card-text">
                        <h4>Lemon dessert</h4>
                        <span>$4.99</span>
                        <p>This comes straight from grandma`s recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
                        <Link href="#">Order a delivery</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials