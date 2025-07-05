import { FC } from "react"
import Link from '@mui/material/Link';

import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";

type FooterLink = {
  label: string;
  href: string;
};

export type FooterProps = {
  links?: FooterLink[];
  copyrightText: string;
};

const UisFooter: FC<FooterProps> = ({
  links = [],
  copyrightText
}) => {
  return (
    <Box
      component="footer"
      className="Footer"
    >
      {links.length > 0 && (
        <List className="FooterLink" disablePadding>
          {links.map((link, index) => (
            <ListItem key={index} disablePadding className='FooterLink-Item'>
              <ListItemButton
                component={Link}
                className="FooterLink-Button"
                href={link.href}
              >
                {link.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      <Typography variant="body2" color="textSecondary">
        {copyrightText}
      </Typography>
    </Box>
  )
}

export default UisFooter
