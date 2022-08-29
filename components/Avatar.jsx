import { Image } from "@mantine/core";

export default function Avatar({ address, size = "24px", radius = "50%" }) {
  return (
    <Image
      width={size}
      radius={radius}
      src={`https://avatars.dicebear.com/api/identicon/${address}.svg`}
      alt="user avatar"
    />
  );
}
