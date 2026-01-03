import Header from "@/components/header";
import MainCard from "@/components/main_card";
import Devices from "@/components/devices";
import { getUsers, getDevices } from "@/services/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function Home() {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const handleGetUser = async () => {
            const data = await getUsers()
            setUserName(data?.[0].name + " " + data?.[0].lastname)
            setFirstName(data?.[0].name)
        };
        handleGetUser();
    }, []);

    useEffect(() => {
        const handleGetDevices = async () => {
            const { ok, message, data } = await getDevices();

            if (!ok) {
                toast.error(message);
                return;
            }

            setDevices(data);
        };
        handleGetDevices();
    }, []);

    const shadow = "shadow-[0_0_25px_-5px_rgba(255,255,255,0.25)]"


    return (
        <div className="h-screen bg-[#121220] text-white">
            <Header username={userName} shadow={shadow} />
            <main className="flex flex-col md:flex-row p-3">
                <MainCard firstName={firstName} shadow={shadow} />
                <div className="flex flex-col mt-4 md:mt-0 md:pl-8 w-full md:w-2/3 gap-3">
                    <h2 className="text-2xl">Mis dispositivos</h2>
                    <Devices devices={devices} />
                </div>
            </main>
        </div>
    )
}

export default Home;