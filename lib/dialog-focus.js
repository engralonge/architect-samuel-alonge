export function trapDialogFocus(event) {
  if (event.key !== "Tab") return;
  const dialog = event.currentTarget;
  const controls = [...dialog.querySelectorAll("button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])")]
    .filter((element) => element.getClientRects().length > 0);
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (!first) { event.preventDefault(); return; }
  const focused = document.activeElement;
  if (event.shiftKey && (focused === first || focused === dialog)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (focused === last || focused === dialog)) {
    event.preventDefault();
    first.focus();
  }
}
