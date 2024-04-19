import { Breadcrumb as BSBreadcrumb, BreadcrumbItem } from "react-bootstrap";

const Breadcrumb = ({ title, parents }) => {
  return (
    <BSBreadcrumb listProps={{ className: "mb-0 align-items-center" }}>
      <BreadcrumbItem
        linkProps={{ className: "text-decoration-none" }}
        href="/"
      >
        Home
      </BreadcrumbItem>
      {
        parents?<BreadcrumbItem
        linkProps={{ className: "text-decoration-none" }}
        href="/users"
      >
        {parents}
      </BreadcrumbItem>:null
      }
      <BreadcrumbItem active>{title}</BreadcrumbItem>
    </BSBreadcrumb>
  );
};

export default Breadcrumb;
