import { FC } from "react";
import Link from "next/link";

interface PaginationProps {
  prevPageLink: string | null;
  nextPageLink: string | null;
}

const Pagination: FC<PaginationProps> = ({ prevPageLink, nextPageLink }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {prevPageLink && (
          <li className="page-item">
            <Link href={prevPageLink}>
              <a className="page-link" aria-label="Previous">
                Пред.
              </a>
            </Link>
          </li>
        )}

        {nextPageLink && (
          <li className="page-item">
            <Link href={nextPageLink}>
              <a className="page-link" aria-label="Next">
                След.
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
