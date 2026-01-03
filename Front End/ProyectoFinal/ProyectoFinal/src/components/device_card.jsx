import bgImage from "../assets/summer-landscape-48.png"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { deviceIcon } from "../stores/deviceIcon"

function DeviceCard(props) {

    let state = props.device.state ? "Encendido" : "Apagado";

    return (
        <div
            className={`w-full bg-dark-500 md:justify-start border-2 border-[#c8c8ee] rounded-lg`}>
            <div className="flex flex-col">
                <p className="flex items-center">{deviceIcon[props.device.icon].icono}{props.device.name}</p>
                <div className="text-2xl flex items-center justify-center space-x-2">
                    <Switch id="airplane-mode" checked={props.device.state} />
                    <Label htmlFor="airplane-mode">{state}</Label>
                </div>
            </div>
        </div>
    );
}

export default DeviceCard;
