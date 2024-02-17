import { Box, Button, Toolbar } from "@mui/material";
import { itemType } from "../lib/Types";

interface SectionLayoutProps {
  item: itemType;
  inviewRef: React.RefObject<HTMLElement> | null;
}

export default function SectionLayout({ item, inviewRef }: SectionLayoutProps) {
  const { id, title, color, subtitle } = item;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          height: "100vh",
          backgroundColor: color,
          flexDirection: "column",
          pt: "68px",
        }}
        ref={inviewRef}
        id={id}
      >
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </Box>
    </>
  );
}
