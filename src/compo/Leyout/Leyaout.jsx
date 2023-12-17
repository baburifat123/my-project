import Nav from "./Nav";


const Leyaout = ({children}) => {
    return (
        <div id="b">
            <Nav></Nav>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Leyaout;