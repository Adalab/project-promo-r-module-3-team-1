
import '../styles/Form-design.scss';


function formDesign(props) {
  
    const handleInput = (ev) => {
      let paletteClass = '';
      const inputValue = ev.target.value;
      const inputName = ev.target.name;
  
      props.setobjetc({ ...props.object, [inputName]: inputValue });
  
      if (props.object.palette === '1') {
        paletteClass = 'js-palette1';
      }
      if (props.object.palette === '2') {
        paletteClass = 'js-palette2';
      }
      if (props.object.palette === '3') {
        paletteClass = 'js-palette3';
      }
    };
    return(
    <fieldset className="design">
    <div className="design__div">
      <i className="fa-solid fa-object-ungroup design__div--icon"></i>
      <legend className="design__div--legend">diseña</legend>
      <i className="fa fa-shield fa-shield-up design__div--arrow js-arrow js-arrow-design-up"></i>
      <i className="fa fa-shield design__div--arrow js-arrow js-arrow-design-down collapsed"></i>
    </div>

    <div className="design__second js-design">
      <div className="div2_container">
        <div className="div2">
          <ul className="div2__palette">
            <label className="div2__palette--checkBox">
              wonder adalaber
            </label>
            <input
              type="radio"
              id="green"
              name="palette"
              className="js-palette2 p1 div2__palette--input"
              value="1"
              checked={props.object.palette === '1'}
              onChange={handleInput}
            />
            <li className="div2__palette--darkGreen div2__palette--list"></li>
            <li className="div2__palette--mediumGreen div2__palette--list"></li>
            <li className="div2__palette--lightGreen div2__palette--list"></li>
          </ul>
        </div>
        <div className="div2">
          <ul className="div2__palette">
            <label className="div2__palette--checkBox">
              super frontend
            </label>
            <input
              type="radio"
              id="red"
              name="palette"
              className="js-palette2 p2 div2__palette--input"
              value="2"
              checked={props.object.palette === '2'}
              onChange={handleInput}
            />
            <li className="div2__palette--darkRed div2__palette--list"></li>
            <li className="div2__palette--mediumRed div2__palette--list"></li>
            <li className="div2__palette--lightRed div2__palette--list"></li>
          </ul>
        </div>
        <div className="div2">
          <ul className="div2__palette">
            <label className="div2__palette--checkBox">
              backend woman
            </label>
            <input
              type="radio"
              id="random"
              name="palette"
              className="js-palette3 p3 div2__palette--input"
              value="3"
              checked={props.object.palette === '3'}
              onChange={handleInput}
            />
            <li className="div2__palette--greenThree div2__palette--list"></li>
            <li className="div2__palette--yellowThree div2__palette--list"></li>
            <li className="div2__palette--greyThree div2__palette--list"></li>
          </ul>
        </div>
      </div>
    </div>
  </fieldset>
  )
}

export default formDesign;