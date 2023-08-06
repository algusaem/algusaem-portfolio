export interface NavBarLinkProps {
  displayName: string;
  routeName: string;
}
export interface NavBarLinksProps {
  direction?: "row" | "column";
}
export interface DisclosureProps {
  isOpen: boolean;
  onClose: () => void;
}
