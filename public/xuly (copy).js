//var React = require('react');
//var createReactClass = require('create-react-class');


var QuangHung = React.createClass({
    render: function(){
        return(
            <h1 className="mauvang">Quang Hung React Js</h1>
        );
    }
});
ReactDOM.render(
        <div>
            <QuangHung />
            <QuangHung />
            <QuangHung />
            <QuangHung />
        </div>
,document.getElementById("root") ); 