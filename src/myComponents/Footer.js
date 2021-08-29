import React from 'react'

export default function Footer() {
    let footerStyle ={
        backgroundColor: "red",
        color : "white",
        marginTop: "80vh"
    };
    return (
        <footer className="dark-bg" style={footerStyle}>
            <p className="text-center">Copyright &copy; Darshan</p>
        </footer>
    )
}
