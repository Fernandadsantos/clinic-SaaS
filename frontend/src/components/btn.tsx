import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BtnWithLinkProps } from "../interfaces/index";

export default function Btn({ text, path, variant, size }: BtnWithLinkProps) {
    return (
        <Link to={path}>
            <Button
                size={size}
                color="success"
                variant={variant}
            >
                <p className="font-semibold">{text}</p>
            </Button>
        </Link>
    );
}
