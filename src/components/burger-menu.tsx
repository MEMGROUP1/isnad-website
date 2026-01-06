import { BurgerMenuIcon } from "@/assets/icons";
import { Button } from "./ui/button";

export default function BurgerMenu() {
    // TODO: Implement the burger menu functionality later
    return (
        <>
            <Button variant={"blur"} className="lg:hidden py-2.5! bg-primary/50 hover:bg-primary/60">
                <span className="sr-only">Open menu</span>

                <BurgerMenuIcon />
            </Button>

            {/* Popover */}
        </>
    );
}
