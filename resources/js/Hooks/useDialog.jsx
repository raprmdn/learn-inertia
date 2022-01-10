import React, {useRef} from 'react';
import {Modal} from "bootstrap";

export default function useDialog() {
    const modal = useRef(null)
    return [
        open = () => new Modal(modal.current).show(),
        close = () => Modal.getInstance(modal.current).hide(),
        modal
    ]
}
