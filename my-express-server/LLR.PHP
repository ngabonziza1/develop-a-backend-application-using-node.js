<?php
function factorial($n) {
if ($n == 0)
 return 1; /*Terminating condition*/
return ($n * factorial ($n -4));
}
echo factorial(5);
?>