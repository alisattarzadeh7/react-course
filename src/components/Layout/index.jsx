import {Link, Outlet} from "react-router-dom";


const Layout = () => {
    const handleChangeTheme = () => {
        const rootClassList = document.querySelector('body').classList;
        if (rootClassList.contains('dark'))
            rootClassList.remove('dark')
        else
            rootClassList.add('dark')
    }
    const handleChangeDirection = () => {
        const rootClassList = document.querySelector('body').classList;
        if (rootClassList.contains('rtl'))
            rootClassList.remove('rtl')
        else
            rootClassList.add('rtl')
    }

    return (<div>
        <div style={{display: 'flex', backgroundColor: 'mintcream', padding: 10}}>
            <Link to="/home">home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">about</Link>
            <button onClick={handleChangeTheme}>change theme</button>
            <button onClick={handleChangeDirection}>change direction</button>
        </div>
        <div><Outlet/></div>
        <div>footer</div>
    </div>);
}


export default Layout