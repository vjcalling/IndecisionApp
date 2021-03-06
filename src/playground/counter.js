class Counter extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };

    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// console.log("app.js is running from babel!");

// const user = {
//     location: 'Bangalore',
//     age: 26
// };

// function getLocation(location){
//     if(location)
//         return <p> Location: {location}</p>;
// }

// const template = (
//     <div>
//         <h1>This is JSX from app.js</h1>
//         <p>Some info!</p>
//         {getLocation(user.location)}
//         {user.age >=18 && <p>Age: {user.age}</p>}
        
//     </div>
// );

// const multiplier = {

//     numbers: [10, 20, 30],
//     multiplyBy: 5,
//     multiply() {
//         return this.numbers.map((number) => number*this.multiplyBy);
//     }
// };


// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const subtractOne = () => {
//     count--;
//     renderCounterApp();
// };

// const resetCount = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");


// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>    
//             <button id="my-id-add" className="button" onClick={addOne}>+1</button>
//             <button id="my-id-sub" className="button" onClick={subtractOne}>-1</button>
//             <button id="my-id-reset" className="button" onClick={resetCount}>reset</button>
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();