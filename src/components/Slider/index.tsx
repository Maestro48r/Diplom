import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import Sneakers from "../../data/sneakers.json";

const Slider = () => (
  <Nouislider range={{ min: 0, max: 28000 }} start={[20, 80]} connect />
);

const PRICES = [{sneakers.price}];

class Pricepicker extends React.Component {
  state = {
    price: number,
  };

  onUpdate = index => (render, handle, value, un, percent) => {
    prices[index] = value[0];
    this.setState({ price: `${sneaker.price}` });
  };

  render() {
    const { item.price } = this.state;
    return (
      <div className="slider" id="pricepicker">
        {sneakers.items.map((item, index) => (
          <Nouislider
            key={item}
            id={item}
            start={127}
            connect={[true, false]}
            orientation="vertical"
            range={{
              min: 0,
              max: 255
            }}
            onUpdate={this.onUpdate(index)}
          />
        ))}
        <div id="result" price={{ price: value }} />
      </div>
    );
  }
}

export default Slider;