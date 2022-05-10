import { Image } from "@mantine/core";

export default function Avatar({ address, size = "24px" }) {
  return (
    <Image
      width={size}
      radius={"50%"}
      src={`https://avatars.dicebear.com/api/identicon/${address}.svg`}
      alt="user avatar"
    />
  );
}
