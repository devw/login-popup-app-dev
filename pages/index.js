import React from "react";

const onInstall = async (e) => {
    e.preventDefault();
    fetch("./api/install", { method: "POST", body: JSON.stringify({ a: 2 }) });
};

const onUninstall = async (e) => {
    e.preventDefault();
    fetch("./api/uninstall", {
        method: "DELETE",
    });
};

const onUpdateContract = async (e) => {
    e.preventDefault();
    fetch("./api/update-contract", {
        method: "PUT",
        body: JSON.stringify({ a: 2 }),
    });
};

export default class HomePage extends React.Component {
    async componentDidMount() {}

    render = () => (
        <div>
            <button onClick={onInstall}>install</button>
            <button onClick={onUninstall}>uninstall</button>
            <button onClick={onUpdateContract}>updateContract</button>
        </div>
    );
}
