import React from 'react';
import styles from './css/introduce.module.css'

class Introduce extends React.Component {
  state = { x: 0, y: 0 };
  handleMouseMove = (event) => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };
  render() {
    const { x, y } = this.state;

    return (
      <section className={`${styles.introCon}`}>
        <div className={`${styles.introBox}`} onMouseMove={this.handleMouseMove}>
          <h1 className={`${styles.titleCon}`}>
            <span className={`${styles.title}`}>사용성을 개선을 위해</span>
            <strong
              className={`${styles.title} ${styles.englishTitle}`}
              style={{backgroundPositionX:this.state.x * -4 / 10 - 100, backgroundPositionY:this.state.y * 4 / 100 - 50}}
            >
              critical thinking
            </strong>
            <span className={`${styles.title}`}>하는 <strong>개발자 심단비</strong>입니다.</span>
          </h1>
        </div>
      </section>
    );
  }
}

export default Introduce;