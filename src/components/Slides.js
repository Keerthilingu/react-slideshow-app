import React from "react";

class Slides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlideIndex: 0,
            nextButtonState: false,
            prevButtonState: true,
            restartButtonState: true,
        };
    }

    restartButton = () => {
        let count = this.props.slides.length;
        if (count > 1) {
            this.setState({ nextButtonState: false });
        } else {
            this.setState({ nextButtonState: true, prevButtonState: true });
        }
        this.setState({
            currentSlideIndex: 0,
            restartButtonState: true,
            prevButtonState: true,
        });
    };

    prevButton = () => {
        let count = this.state.currentSlideIndex;
        if (this.state.currentSlideIndex === 1) {
            this.setState({
                prevButtonState: true,
                restartButtonState: true,
                nextButtonState: false,
                currentSlideIndex: --count,
            });
        } else {
            this.setState({
                currentSlideIndex: --count,
                nextButtonState: false,
            });
        }
    };

    nextButton = () => {
        let count = this.state.currentSlideIndex;
        if (this.state.currentSlideIndex === this.props.slides.length - 2) {
            this.setState({
                nextButtonState: true,
                currentSlideIndex: ++count,
            });
        } else {
            this.setState({
                currentSlideIndex: ++count,
                prevButtonState: false,
                restartButtonState: false,
            });
        }
    };

    render() {
        return (
            <div>
                <div id="navigation" className="text-center">
                    <button
                        data-testid="button-restart"
                        disabled={this.state.restartButtonState}
                        className="small outlined"
                        onClick={this.restartButton}
                    >
                        Restart
                    </button>
                    <button
                        data-testid="button-prev"
                        disabled={this.state.prevButtonState}
                        className="small"
                        onClick={this.prevButton}
                    >
                        Prev
                    </button>
                    <button
                        data-testid="button-next"
                        disabled={
                            this.state.nextButtonState &&
                            this.props.slides.length + 1 >
                            this.state.currentSlideIndex
                        }
                        className="small"
                        onClick={this.nextButton}
                    >
                        Next
                    </button>
                </div>
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">
                        {this.props.slides[this.state.currentSlideIndex].title}
                    </h1>
                    <p data-testid="text">
                        {this.props.slides[this.state.currentSlideIndex].text}
                    </p>
                </div>
            </div>
        );
    }
}

export default Slides;
