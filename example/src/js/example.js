import { CapacitorAutoStart } from 'capacitor-autostart';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorAutoStart.echo({ value: inputValue })
}
