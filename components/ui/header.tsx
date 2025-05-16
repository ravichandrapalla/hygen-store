import Image from "next/image";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-12 w-[319px] m-8">
      <Button asChild={true}>
        <Image
          src="/icons/Menuicon.svg"
          alt="menu-icon"
          width={48}
          height={48}
        />
      </Button>

      <Image
        src="/icons/Logo.svg"
        alt="web-logo"
        width={100}
        height={43}
        priority
        className="object-contain"
      />
      <Button asChild={true}>
        <Image src="/icons/Cart.svg" alt="cart-icon" width={24} height={24} />
      </Button>
    </header>
  );
}
