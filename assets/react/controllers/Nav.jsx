import React from "react";

export default function (){
    let Links = [
        {name: "Accueil", href: "/"},
        {name: "Recettes", href: "/recipes"},
        {name: "Connexion", href: "/login"},
    ]
    return (
    <div className="w-full fixed top-0 left-0">
        <div className="flex items-center justify-between bg-blue-500 py-5">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
                <span className="text-3xl mr-1 pt-2"><ion-icon name="share-social-outline"></ion-icon></span>
                RecipeShare
            </div>
            <ul className="md:flex md:items-center ">
                {Links.map((link) => (
                    <li key={link.name} className="md:ml-10 text-xl">
                        <a href={link.href} className="text-white hover:text-blue-500 hover:bg-white px-3 py-2 rounded duration-75">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}