"use client";

import Container from "../Container";

import { BsSnow } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { TbBeach, TbBuildingCastle, TbPool, TbMountain } from "react-icons/tb";
import { MdOutlineVilla, MdOutlineDownhillSkiing } from "react-icons/md";
import {
  GiModernCity,
  GiCaveEntrance,
  GiIsland,
  GiBoatFishing,
  GiForestCamp,
  GiCactus,
} from "react-icons/gi";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Mountains",
    icon: MdOutlineDownhillSkiing,
    description: "This property is close to ski traks",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "Downtown",
    icon: GiModernCity,
    description: "This property is close to downtown",
  },
  {
    label: "Historical",
    icon: TbBuildingCastle,
    description: "This property is close to historical locations",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island",
  },
  {
    label: "Lakes",
    icon: GiBoatFishing,
    description: "This property is close to a lake",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property have camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is close to the arctic",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert",
  },
  {
    label: "Lux",
    icon: IoDiamondOutline,
    description: "This property is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className='
      pt-4
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
      '
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
