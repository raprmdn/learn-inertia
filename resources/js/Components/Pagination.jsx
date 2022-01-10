import React from 'react';
import {Link} from "@inertiajs/inertia-react";

export default function Pagination({ links }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, key) => (
                    <li className={`page-item ${link.active && 'active'} ${link.url === null && 'disabled'}`} key={key}>
                        <Link disabled={link.url === null ? true : false} as="button" className="page-link" key={key} href={link.url} dangerouslySetInnerHTML={{__html: link.label}}></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
