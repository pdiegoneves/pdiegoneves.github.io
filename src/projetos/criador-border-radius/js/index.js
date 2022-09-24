document.getElementById("border-radius-1").value;

function mundarBorderRadius() {
  const square = document.getElementById("square");
  const codeCss = document.getElementById("css");
  const valueLeftTop = document.getElementById("border-radius-top-left-value");
  const valueRightTop = document.getElementById(
    "border-radius-top-right-value"
  );
  const valueRightBotton = document.getElementById(
    "border-radius-botton-right-value"
  );
  const valueLeftBotton = document.getElementById(
    "border-radius-botton-left-value"
  );

  let border_radius_top_left =
    document.getElementById("border-radius-top-left").value + "%";
  let border_radius_top_right =
    document.getElementById("border-radius-top-right").value + "%";
  let border_radius_botton_right =
    document.getElementById("border-radius-botton-right").value + "%";
  let border_radius_botton_left =
    document.getElementById("border-radius-botton-left").value + "%";
  square.style.borderRadius =
    border_radius_top_left +
    border_radius_top_right +
    border_radius_botton_right +
    border_radius_botton_left;

  valueLeftTop.textContent = border_radius_top_left;
  valueRightTop.textContent = border_radius_top_right;
  valueRightBotton.textContent = border_radius_botton_right;
  valueLeftBotton.textContent = border_radius_botton_left;
  codeCss.value =
    "border-radius: " +
    border_radius_top_left +
    " " +
    border_radius_top_right +
    " " +
    border_radius_botton_right +
    " " +
    border_radius_botton_left;
  +";";
}

function copiarCodigo() {
  const codeCss = document.getElementById("css");
  codeCss.select();
  codeCss.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copiado para a área de transferência");
}
