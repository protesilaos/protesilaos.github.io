---
title: 'Modus themes (Emacs): major review of "nuanced" colours'
excerpt: "Complete report on the thoroughgoing review of some accented background values."
---

The following is intended to be read inside of an `org-mode` buffer, so
I provide the text verbatim for you to read locally.

The short version of this report is that the "nuanced" backgrounds have
undergone a thoroughgoing review.  Now they are more consistent and
better suited to their intended role, which is to provide a subtle
coloured backdrop on which all existing foreground values can be used
without prejudice to the overarching accessibility objective of the
themes (namely, a contrast ratio that is >= 7:1, which corresponds to
the highest standard of its kind: WCAG AAA).

UPDATE 2020-07-16: [Commit
3306e4bd7](https://gitlab.com/protesilaos/modus-themes/-/commit/3306e4bd7d6b9cc880dff6966c4f02352af8beb8)
further refines the relevant colours.  The tweaks are subtle, so the
tables in this report are edited accordingly, without further
references.

* * *

```org
#+TITLE: Modus themes: major review of "nuanced" palette subset
#+AUTHOR: Protesilaos Stavrou

* Scope of the review

The palette of each of the Modus themes (Modus Operandi, Modus Vivendi)
contains a subset of accent values that are meant to provide "nuanced"
colouration where appropriate.

Prior to the present review, the "nuanced" colours were inconsistent
and, at times, failed to fulfil their intended role.

The changes documented herein are three-fold:

+ Make all "nuanced" backgrounds more pronounced.
+ Disambiguate and normalise certain "nuanced" foregrounds.
+ Ensure consistency of relevant luminance ratios between all "nuanced"
  colours.

* Tools for measuring relative luminance and previewing colours

This is the formula for the subsequent calculations.  A resulting value
that is >= 7 means that the colour combination is highly accessible and
receives a AAA rating in the WCAG standard (what the Modus themes must
always conform with):

#+begin_src emacs-lisp
;; Code is courtesy of Omar Antolín Camarena:
;; https://github.com/oantolin/emacs-config
(defun wcag (hex)
  (apply #'+
         (cl-mapcar
          (lambda (k x)
            (* k (if (<= x 0.03928)
                     (/ x 12.92)
                   (expt (/ (+ x 0.055) 1.055) 2.4))))
          '(0.2126 0.7152 0.0722)
          (color-name-to-rgb hex))))

(defun clr (c1 c2)
  (let ((ct (/ (+ (wcag c1) 0.05)
               (+ (wcag c2) 0.05))))
    (max ct (/ ct))))
#+end_src

Use =rainbow-mode= to preview the colour values presented below.

#+begin_src emacs-lisp
(use-package rainbow-mode
  :ensure
  :commands rainbow-mode
  :config
  (setq rainbow-ansi-colors nil)
  (setq rainbow-x-colors nil))
#+end_src

* Tables: contrast ratios of foreground colours against "nuanced" backgrounds

The following tables compare all colour values that are intended for
foreground text in a regular buffer against all "nuanced" backgrounds.
The top row has the following (in this order): =red-nuanced=,
=green-nuanced=, =yellow-nuanced=, =blue-nuanced=, =magenta-nuanced=,
=cyan-nuanced=.

The inclusion of the main background values (=bg-main=, =bg-dim=, =bg-alt=) is
only meant to confirm that the "nuanced" backgrounds are close enough to
the base background values and to confirm their newfound consistency
(their ratios are the same in the "new" tables, but not in the "old"
ones).

** Modus Operandi (new vs old)

Pay attention to the different values in the top row and in the
=*-nuanced= set in column 1.

#+NAME: Modus Operandi new
| Colour name             |         | #fff1f0 | #ecf7ed | #fff3da | #f3f3ff | #fdf0ff | #ebf6fa |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red                     | #a60000 |    7.28 |    7.28 |    7.28 |    7.28 |    7.28 |    7.28 |
| red-alt                 | #972500 |    7.40 |    7.40 |    7.40 |    7.39 |    7.40 |    7.40 |
| red-alt-other           | #a0132f |    7.26 |    7.26 |    7.26 |    7.26 |    7.26 |    7.26 |
| green                   | #005e00 |    7.34 |    7.34 |    7.34 |    7.33 |    7.34 |    7.34 |
| green-alt               | #315b00 |    7.27 |    7.27 |    7.26 |    7.26 |    7.26 |    7.27 |
| green-alt-other         | #145c33 |    7.32 |    7.32 |    7.32 |    7.31 |    7.32 |    7.32 |
| yellow                  | #813e00 |    7.28 |    7.28 |    7.28 |    7.27 |    7.28 |    7.28 |
| yellow-alt              | #70480f |    7.28 |    7.28 |    7.28 |    7.27 |    7.28 |    7.28 |
| yellow-alt-other        | #863927 |    7.26 |    7.26 |    7.26 |    7.26 |    7.26 |    7.27 |
| blue                    | #0030a6 |    9.67 |    9.68 |    9.67 |    9.67 |    9.67 |    9.68 |
| blue-alt                | #223fbf |    7.54 |    7.54 |    7.54 |    7.54 |    7.54 |    7.54 |
| blue-alt-other          | #0000bb |   11.12 |   11.12 |   11.11 |   11.11 |   11.11 |   11.12 |
| magenta                 | #721045 |   10.18 |   10.18 |   10.18 |   10.17 |   10.18 |   10.18 |
| magenta-alt             | #8f0075 |    7.87 |    7.87 |    7.87 |    7.87 |    7.87 |    7.87 |
| magenta-alt-other       | #5317ac |    9.15 |    9.15 |    9.15 |    9.14 |    9.15 |    9.15 |
| cyan                    | #00538b |    7.31 |    7.32 |    7.31 |    7.31 |    7.31 |    7.32 |
| cyan-alt                | #30517f |    7.32 |    7.32 |    7.31 |    7.31 |    7.31 |    7.32 |
| cyan-alt-other          | #005a5f |    7.27 |    7.27 |    7.26 |    7.26 |    7.26 |    7.27 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-faint               | #7f1010 |    9.62 |    9.62 |    9.62 |    9.61 |    9.62 |    9.62 |
| green-faint             | #104410 |   10.28 |   10.29 |   10.28 |   10.28 |   10.28 |   10.29 |
| yellow-faint            | #5f4400 |    8.25 |    8.25 |    8.25 |    8.25 |    8.25 |    8.25 |
| blue-faint              | #002f88 |   10.83 |   10.84 |   10.83 |   10.83 |   10.83 |   10.84 |
| magenta-faint           | #752f50 |    8.38 |    8.38 |    8.37 |    8.37 |    8.37 |    8.38 |
| cyan-faint              | #12506f |    7.95 |    7.95 |    7.94 |    7.94 |    7.94 |    7.95 |
| red-alt-faint           | #702f00 |    9.11 |    9.11 |    9.11 |    9.10 |    9.11 |    9.11 |
| green-alt-faint         | #30440f |    9.74 |    9.74 |    9.74 |    9.74 |    9.74 |    9.75 |
| yellow-alt-faint        | #5d5000 |    7.31 |    7.31 |    7.30 |    7.30 |    7.30 |    7.31 |
| blue-alt-faint          | #003f78 |    9.63 |    9.63 |    9.63 |    9.62 |    9.63 |    9.63 |
| magenta-alt-faint       | #702565 |    8.92 |    8.92 |    8.91 |    8.91 |    8.91 |    8.92 |
| cyan-alt-faint          | #354f6f |    7.64 |    7.64 |    7.64 |    7.63 |    7.64 |    7.64 |
| red-alt-other-faint     | #7f002f |    9.82 |    9.82 |    9.82 |    9.82 |    9.82 |    9.83 |
| green-alt-other-faint   | #0f443f |    9.95 |    9.95 |    9.95 |    9.94 |    9.95 |    9.95 |
| yellow-alt-other-faint  | #5e3a20 |    9.08 |    9.08 |    9.08 |    9.07 |    9.08 |    9.08 |
| blue-alt-other-faint    | #1f2f6f |   11.27 |   11.27 |   11.26 |   11.26 |   11.26 |   11.27 |
| magenta-alt-other-faint | #5f3f7f |    7.62 |    7.63 |    7.62 |    7.62 |    7.62 |    7.63 |
| cyan-alt-other-faint    | #2e584f |    7.27 |    7.27 |    7.27 |    7.27 |    7.27 |    7.27 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-nuanced             | #5f0000 |   12.84 |   12.84 |   12.84 |   12.83 |   12.84 |   12.85 |
| green-nuanced           | #004000 |   11.01 |   11.02 |   11.01 |   11.00 |   11.01 |   11.02 |
| yellow-nuanced          | #3f3000 |   11.68 |   11.68 |   11.68 |   11.67 |   11.68 |   11.69 |
| blue-nuanced            | #201f55 |   13.75 |   13.75 |   13.74 |   13.74 |   13.74 |   13.75 |
| magenta-nuanced         | #541f4f |   11.32 |   11.33 |   11.32 |   11.31 |   11.32 |   11.33 |
| cyan-nuanced            | #0f3360 |   11.48 |   11.48 |   11.48 |   11.47 |   11.48 |   11.48 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-special-cold         | #093060 |   11.91 |   11.91 |   11.90 |   11.90 |   11.90 |   11.91 |
| fg-special-mild         | #184034 |   10.48 |   10.48 |   10.48 |   10.47 |   10.48 |   10.48 |
| fg-special-warm         | #5d3026 |    9.96 |    9.96 |    9.96 |    9.95 |    9.96 |    9.97 |
| fg-special-calm         | #61284f |    9.92 |    9.92 |    9.92 |    9.91 |    9.92 |    9.92 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-main                 | #000000 |   19.09 |   19.09 |   19.08 |   19.08 |   19.08 |   19.10 |
| fg-dim                  | #282828 |   13.40 |   13.40 |   13.40 |   13.39 |   13.40 |   13.41 |
| fg-alt                  | #505050 |    7.33 |    7.33 |    7.33 |    7.32 |    7.33 |    7.33 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| bg-main                 | #ffffff |    1.10 |    1.10 |    1.10 |    1.10 |    1.10 |    1.10 |
| bg-dim                  | #f8f8f8 |    1.04 |    1.04 |    1.04 |    1.04 |    1.04 |    1.04 |
| bg-alt                  | #f0f0f0 |    1.04 |    1.04 |    1.04 |    1.04 |    1.04 |    1.04 |
#+TBLFM: $3='(clr $2 @1$3);%0.2f::$4='(clr $2 @1$4);%0.2f::$5='(clr $2 @1$5);%0.2f::$6='(clr $2 @1$6);%0.2f::$7='(clr $2 @1$7);%0.2f::$8='(clr $2 @1$8);%0.2f

#+NAME: Modus Operandi old
| Colour name             |         | #fef2f2 | #f4faf4 | #fcf6f1 | #f4f4ff | #fff4fc | #f0f6fa |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red                     | #a60000 |    7.32 |    7.56 |    7.47 |    7.34 |    7.48 |    7.35 |
| red-alt                 | #972500 |    7.44 |    7.68 |    7.59 |    7.45 |    7.59 |    7.47 |
| red-alt-other           | #a0132f |    7.30 |    7.54 |    7.45 |    7.32 |    7.45 |    7.33 |
| green                   | #005e00 |    7.38 |    7.62 |    7.53 |    7.39 |    7.53 |    7.41 |
| green-alt               | #315b00 |    7.31 |    7.55 |    7.46 |    7.32 |    7.46 |    7.33 |
| green-alt-other         | #145c33 |    7.36 |    7.60 |    7.51 |    7.37 |    7.51 |    7.39 |
| yellow                  | #813e00 |    7.32 |    7.56 |    7.47 |    7.33 |    7.47 |    7.35 |
| yellow-alt              | #70480f |    7.32 |    7.56 |    7.47 |    7.33 |    7.47 |    7.35 |
| yellow-alt-other        | #863927 |    7.30 |    7.54 |    7.45 |    7.32 |    7.46 |    7.33 |
| blue                    | #0030a6 |    9.73 |   10.05 |    9.93 |    9.74 |    9.93 |    9.76 |
| blue-alt                | #223fbf |    7.58 |    7.83 |    7.74 |    7.60 |    7.74 |    7.61 |
| blue-alt-other          | #0000bb |   11.18 |   11.54 |   11.41 |   11.20 |   11.41 |   11.22 |
| magenta                 | #721045 |   10.24 |   10.57 |   10.45 |   10.25 |   10.45 |   10.27 |
| magenta-alt             | #8f0075 |    7.92 |    8.18 |    8.08 |    7.93 |    8.08 |    7.95 |
| magenta-alt-other       | #5317ac |    9.20 |    9.50 |    9.39 |    9.22 |    9.39 |    9.24 |
| cyan                    | #00538b |    7.35 |    7.60 |    7.51 |    7.37 |    7.51 |    7.38 |
| cyan-alt                | #30517f |    7.36 |    7.60 |    7.51 |    7.37 |    7.51 |    7.38 |
| cyan-alt-other          | #005a5f |    7.31 |    7.55 |    7.46 |    7.32 |    7.46 |    7.33 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-faint               | #7f1010 |    9.68 |    9.99 |    9.87 |    9.69 |    9.88 |    9.71 |
| green-faint             | #104410 |   10.34 |   10.68 |   10.55 |   10.36 |   10.56 |   10.38 |
| yellow-faint            | #5f4400 |    8.30 |    8.57 |    8.47 |    8.31 |    8.47 |    8.33 |
| blue-faint              | #002f88 |   10.89 |   11.25 |   11.12 |   10.91 |   11.12 |   10.93 |
| magenta-faint           | #752f50 |    8.42 |    8.70 |    8.60 |    8.44 |    8.60 |    8.46 |
| cyan-faint              | #12506f |    7.99 |    8.25 |    8.15 |    8.00 |    8.16 |    8.02 |
| red-alt-faint           | #702f00 |    9.16 |    9.46 |    9.35 |    9.18 |    9.35 |    9.19 |
| green-alt-faint         | #30440f |    9.80 |   10.12 |   10.00 |    9.81 |   10.00 |    9.83 |
| yellow-alt-faint        | #5d5000 |    7.35 |    7.59 |    7.50 |    7.36 |    7.50 |    7.37 |
| blue-alt-faint          | #003f78 |    9.68 |   10.00 |    9.88 |    9.70 |    9.89 |    9.72 |
| magenta-alt-faint       | #702565 |    8.96 |    9.26 |    9.15 |    8.98 |    9.15 |    9.00 |
| cyan-alt-faint          | #354f6f |    7.68 |    7.93 |    7.84 |    7.69 |    7.84 |    7.71 |
| red-alt-other-faint     | #7f002f |    9.88 |   10.20 |   10.08 |    9.90 |   10.08 |    9.91 |
| green-alt-other-faint   | #0f443f |   10.00 |   10.33 |   10.21 |   10.02 |   10.21 |   10.04 |
| yellow-alt-other-faint  | #5e3a20 |    9.13 |    9.43 |    9.32 |    9.15 |    9.32 |    9.17 |
| blue-alt-other-faint    | #1f2f6f |   11.33 |   11.70 |   11.56 |   11.35 |   11.57 |   11.37 |
| magenta-alt-other-faint | #5f3f7f |    7.67 |    7.92 |    7.82 |    7.68 |    7.83 |    7.69 |
| cyan-alt-other-faint    | #2e584f |    7.31 |    7.55 |    7.46 |    7.33 |    7.47 |    7.34 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-nuanced             | #4d0006 |   14.56 |   15.04 |   14.86 |   14.59 |   14.87 |   14.62 |
| green-nuanced           | #003000 |   13.49 |   13.94 |   13.77 |   13.52 |   13.77 |   13.54 |
| yellow-nuanced          | #3a2a00 |   12.70 |   13.12 |   12.97 |   12.73 |   12.97 |   12.75 |
| blue-nuanced            | #001170 |   14.61 |   15.09 |   14.91 |   14.63 |   14.91 |   14.66 |
| magenta-nuanced         | #381050 |   14.14 |   14.60 |   14.43 |   14.16 |   14.43 |   14.19 |
| cyan-nuanced            | #003434 |   12.46 |   12.87 |   12.72 |   12.48 |   12.72 |   12.51 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-special-cold         | #093060 |   11.97 |   12.37 |   12.22 |   11.99 |   12.22 |   12.02 |
| fg-special-mild         | #184034 |   10.54 |   10.88 |   10.75 |   10.56 |   10.76 |   10.58 |
| fg-special-warm         | #5d3026 |   10.02 |   10.35 |   10.22 |   10.04 |   10.23 |   10.06 |
| fg-special-calm         | #61284f |    9.97 |   10.30 |   10.18 |    9.99 |   10.18 |   10.01 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-main                 | #000000 |   19.20 |   19.83 |   19.59 |   19.23 |   19.60 |   19.27 |
| fg-dim                  | #282828 |   13.48 |   13.92 |   13.75 |   13.50 |   13.76 |   13.53 |
| fg-alt                  | #505050 |    7.37 |    7.61 |    7.52 |    7.38 |    7.52 |    7.40 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| bg-main                 | #ffffff |    1.09 |    1.06 |    1.07 |    1.09 |    1.07 |    1.09 |
| bg-dim                  | #f8f8f8 |    1.03 |    1.00 |    1.01 |    1.03 |    1.01 |    1.03 |
| bg-alt                  | #f0f0f0 |    1.04 |    1.08 |    1.06 |    1.04 |    1.06 |    1.05 |
#+TBLFM: $3='(clr $2 @1$3);%0.2f::$4='(clr $2 @1$4);%0.2f::$5='(clr $2 @1$5);%0.2f::$6='(clr $2 @1$6);%0.2f::$7='(clr $2 @1$7);%0.2f::$8='(clr $2 @1$8);%0.2f

** Modus Vivendi (new vs old)

Remembers that different values are used in the following two tables in
the top row and in the =*-nuanced= set of column 1.

#+NAME: Modus Vivendi new
| Colour name             |         | #2c0614 | #001904 | #221000 | #0f0e39 | #230631 | #041529 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red                     | #ff8059 |    7.42 |    7.44 |    7.43 |    7.43 |    7.43 |    7.41 |
| red-alt                 | #f4923b |    7.89 |    7.91 |    7.90 |    7.90 |    7.90 |    7.88 |
| red-alt-other           | #ff9977 |    8.81 |    8.83 |    8.82 |    8.82 |    8.82 |    8.80 |
| green                   | #44bc44 |    7.45 |    7.47 |    7.46 |    7.46 |    7.46 |    7.45 |
| green-alt               | #80d200 |    9.74 |    9.76 |    9.75 |    9.75 |    9.75 |    9.73 |
| green-alt-other         | #00cd68 |    8.69 |    8.71 |    8.70 |    8.70 |    8.70 |    8.68 |
| yellow                  | #eecc00 |   11.61 |   11.63 |   11.62 |   11.62 |   11.62 |   11.60 |
| yellow-alt              | #cfdf30 |   12.47 |   12.49 |   12.48 |   12.48 |   12.48 |   12.45 |
| yellow-alt-other        | #f0ce43 |   11.91 |   11.93 |   11.92 |   11.92 |   11.92 |   11.90 |
| blue                    | #29aeff |    7.52 |    7.53 |    7.52 |    7.52 |    7.53 |    7.51 |
| blue-alt                | #72a4ff |    7.41 |    7.42 |    7.42 |    7.42 |    7.42 |    7.40 |
| blue-alt-other          | #00bdfa |    8.45 |    8.47 |    8.46 |    8.46 |    8.46 |    8.44 |
| magenta                 | #feacd0 |   10.52 |   10.54 |   10.53 |   10.53 |   10.53 |   10.51 |
| magenta-alt             | #f78fe7 |    8.78 |    8.80 |    8.79 |    8.79 |    8.79 |    8.77 |
| magenta-alt-other       | #b6a0ff |    8.28 |    8.29 |    8.28 |    8.28 |    8.29 |    8.27 |
| cyan                    | #00d3d0 |    9.82 |    9.84 |    9.83 |    9.83 |    9.83 |    9.81 |
| cyan-alt                | #4ae8fc |   12.46 |   12.48 |   12.47 |   12.47 |   12.47 |   12.44 |
| cyan-alt-other          | #6ae4b9 |   11.73 |   11.76 |   11.74 |   11.74 |   11.74 |   11.72 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-faint               | #ffa0a0 |    9.44 |    9.46 |    9.45 |    9.44 |    9.45 |    9.43 |
| green-faint             | #88cf88 |    9.91 |    9.93 |    9.92 |    9.92 |    9.92 |    9.90 |
| yellow-faint            | #d2b580 |    9.33 |    9.35 |    9.33 |    9.33 |    9.34 |    9.32 |
| blue-faint              | #92baff |    9.35 |    9.37 |    9.36 |    9.36 |    9.36 |    9.34 |
| magenta-faint           | #e0b2d6 |   10.07 |   10.09 |   10.08 |   10.08 |   10.08 |   10.06 |
| cyan-faint              | #a0bfdf |    9.63 |    9.65 |    9.64 |    9.64 |    9.64 |    9.62 |
| red-alt-faint           | #f5aa80 |    9.57 |    9.59 |    9.58 |    9.58 |    9.58 |    9.56 |
| green-alt-faint         | #a8cf88 |   10.45 |   10.47 |   10.46 |   10.46 |   10.46 |   10.44 |
| yellow-alt-faint        | #cabf77 |    9.82 |    9.84 |    9.83 |    9.83 |    9.83 |    9.81 |
| blue-alt-faint          | #a4b0ff |    8.95 |    8.97 |    8.96 |    8.96 |    8.96 |    8.94 |
| magenta-alt-faint       | #ef9fe4 |    9.40 |    9.42 |    9.41 |    9.41 |    9.41 |    9.39 |
| cyan-alt-faint          | #90c4ed |    9.89 |    9.91 |    9.90 |    9.90 |    9.90 |    9.88 |
| red-alt-other-faint     | #ff9fbf |    9.59 |    9.61 |    9.60 |    9.60 |    9.60 |    9.58 |
| green-alt-other-faint   | #88cfaf |   10.14 |   10.16 |   10.15 |   10.15 |   10.15 |   10.13 |
| yellow-alt-other-faint  | #d0ba95 |    9.74 |    9.76 |    9.75 |    9.75 |    9.76 |    9.73 |
| blue-alt-other-faint    | #8fc5ff |   10.15 |   10.17 |   10.16 |   10.15 |   10.16 |   10.13 |
| magenta-alt-other-faint | #d0b4ff |   10.19 |   10.22 |   10.20 |   10.20 |   10.21 |   10.18 |
| cyan-alt-other-faint    | #a4d0bb |   10.77 |   10.80 |   10.79 |   10.78 |   10.79 |   10.76 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-nuanced             | #ffcccc |   12.91 |   12.94 |   12.92 |   12.92 |   12.93 |   12.90 |
| green-nuanced           | #b8e2b8 |   12.78 |   12.81 |   12.79 |   12.79 |   12.79 |   12.76 |
| yellow-nuanced          | #dfdfb0 |   13.40 |   13.43 |   13.41 |   13.41 |   13.42 |   13.39 |
| blue-nuanced            | #bfd9ff |   12.76 |   12.78 |   12.77 |   12.77 |   12.77 |   12.74 |
| magenta-nuanced         | #e5cfef |   12.69 |   12.71 |   12.70 |   12.70 |   12.70 |   12.67 |
| cyan-nuanced            | #a8e5e5 |   13.12 |   13.15 |   13.14 |   13.14 |   13.14 |   13.11 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-special-cold         | #c6eaff |   14.53 |   14.56 |   14.55 |   14.55 |   14.55 |   14.52 |
| fg-special-mild         | #bfebe0 |   14.15 |   14.18 |   14.16 |   14.16 |   14.17 |   14.13 |
| fg-special-warm         | #f8dec0 |   14.17 |   14.20 |   14.18 |   14.18 |   14.19 |   14.16 |
| fg-special-calm         | #fbd6f4 |   14.02 |   14.05 |   14.03 |   14.03 |   14.04 |   14.00 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-main                 | #ffffff |   18.37 |   18.41 |   18.39 |   18.39 |   18.39 |   18.35 |
| fg-dim                  | #e0e6f0 |   14.65 |   14.68 |   14.66 |   14.66 |   14.67 |   14.63 |
| fg-alt                  | #a8a8a8 |    7.72 |    7.74 |    7.73 |    7.73 |    7.73 |    7.72 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| bg-main                 | #000000 |    1.14 |    1.14 |    1.14 |    1.14 |    1.14 |    1.14 |
| bg-dim                  | #110b11 |    1.06 |    1.06 |    1.06 |    1.06 |    1.06 |    1.06 |
| bg-alt                  | #181a20 |    1.06 |    1.06 |    1.06 |    1.06 |    1.06 |    1.06 |
#+TBLFM: $3='(clr $2 @1$3);%0.2f::$4='(clr $2 @1$4);%0.2f::$5='(clr $2 @1$5);%0.2f::$6='(clr $2 @1$6);%0.2f::$7='(clr $2 @1$7);%0.2f::$8='(clr $2 @1$8);%0.2f

#+NAME: Modus Vivendi old
| Colour name             |         | #180505 | #061206 | #18140a | #070722 | #160616 | #091620 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red                     | #ff8059 |    7.98 |    7.73 |    7.42 |    7.98 |    7.92 |    7.40 |
| red-alt                 | #f4923b |    8.49 |    8.22 |    7.89 |    8.49 |    8.42 |    7.86 |
| red-alt-other           | #ff9977 |    9.48 |    9.18 |    8.81 |    9.48 |    9.40 |    8.78 |
| green                   | #44bc44 |    8.02 |    7.77 |    7.45 |    8.02 |    7.95 |    7.43 |
| green-alt               | #80d200 |   10.48 |   10.15 |    9.74 |   10.48 |   10.39 |    9.71 |
| green-alt-other         | #00cd68 |    9.35 |    9.06 |    8.69 |    9.35 |    9.27 |    8.66 |
| yellow                  | #eecc00 |   12.49 |   12.10 |   11.61 |   12.49 |   12.38 |   11.57 |
| yellow-alt              | #cfdf30 |   13.41 |   12.99 |   12.46 |   13.41 |   13.30 |   12.42 |
| yellow-alt-other        | #f0ce43 |   12.81 |   12.41 |   11.91 |   12.81 |   12.70 |   11.87 |
| blue                    | #29aeff |    8.09 |    7.83 |    7.52 |    8.09 |    8.02 |    7.49 |
| blue-alt                | #72a4ff |    7.97 |    7.72 |    7.41 |    7.97 |    7.90 |    7.38 |
| blue-alt-other          | #00bdfa |    9.09 |    8.81 |    8.45 |    9.09 |    9.01 |    8.42 |
| magenta                 | #feacd0 |   11.32 |   10.96 |   10.52 |   11.32 |   11.22 |   10.48 |
| magenta-alt             | #f78fe7 |    9.45 |    9.15 |    8.78 |    9.45 |    9.37 |    8.75 |
| magenta-alt-other       | #b6a0ff |    8.90 |    8.63 |    8.28 |    8.90 |    8.83 |    8.25 |
| cyan                    | #00d3d0 |   10.57 |   10.24 |    9.82 |   10.57 |   10.48 |    9.79 |
| cyan-alt                | #4ae8fc |   13.40 |   12.98 |   12.45 |   13.40 |   13.29 |   12.41 |
| cyan-alt-other          | #6ae4b9 |   12.62 |   12.23 |   11.73 |   12.62 |   12.51 |   11.69 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-faint               | #ffa0a0 |   10.15 |    9.83 |    9.44 |   10.15 |   10.07 |    9.40 |
| green-faint             | #88cf88 |   10.66 |   10.33 |    9.91 |   10.66 |   10.57 |    9.87 |
| yellow-faint            | #d2b580 |   10.03 |    9.72 |    9.33 |   10.03 |    9.95 |    9.29 |
| blue-faint              | #92baff |   10.06 |    9.75 |    9.35 |   10.06 |    9.97 |    9.32 |
| magenta-faint           | #e0b2d6 |   10.83 |   10.49 |   10.07 |   10.83 |   10.74 |   10.03 |
| cyan-faint              | #a0bfdf |   10.36 |   10.04 |    9.63 |   10.36 |   10.28 |    9.60 |
| red-alt-faint           | #f5aa80 |   10.30 |    9.98 |    9.57 |   10.30 |   10.21 |    9.54 |
| green-alt-faint         | #a8cf88 |   11.24 |   10.89 |   10.45 |   11.24 |   11.15 |   10.41 |
| yellow-alt-faint        | #cabf77 |   10.57 |   10.24 |    9.82 |   10.57 |   10.48 |    9.79 |
| blue-alt-faint          | #a4b0ff |    9.63 |    9.33 |    8.95 |    9.63 |    9.55 |    8.92 |
| magenta-alt-faint       | #ef9fe4 |   10.12 |    9.80 |    9.40 |   10.12 |   10.03 |    9.37 |
| cyan-alt-faint          | #90c4ed |   10.64 |   10.31 |    9.89 |   10.64 |   10.55 |    9.85 |
| red-alt-other-faint     | #ff9fbf |   10.32 |   10.00 |    9.59 |   10.32 |   10.23 |    9.56 |
| green-alt-other-faint   | #88cfaf |   10.91 |   10.57 |   10.14 |   10.91 |   10.82 |   10.10 |
| yellow-alt-other-faint  | #d0ba95 |   10.48 |   10.16 |    9.74 |   10.48 |   10.39 |    9.71 |
| blue-alt-other-faint    | #8fc5ff |   10.91 |   10.57 |   10.14 |   10.92 |   10.82 |   10.11 |
| magenta-alt-other-faint | #d0b4ff |   10.97 |   10.62 |   10.19 |   10.97 |   10.87 |   10.16 |
| cyan-alt-other-faint    | #a4d0bb |   11.59 |   11.23 |   10.77 |   11.59 |   11.49 |   10.74 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| red-nuanced             | #ffcccc |   13.89 |   13.46 |   12.91 |   13.89 |   13.77 |   12.87 |
| green-nuanced           | #b0f0b0 |   15.00 |   14.53 |   13.94 |   15.00 |   14.87 |   13.89 |
| yellow-nuanced          | #e0e0bb |   14.63 |   14.18 |   13.60 |   14.63 |   14.51 |   13.55 |
| blue-nuanced            | #ccccff |   12.84 |   12.44 |   11.94 |   12.85 |   12.73 |   11.90 |
| magenta-nuanced         | #eeccee |   13.65 |   13.23 |   12.69 |   13.65 |   13.54 |   12.65 |
| cyan-nuanced            | #aaeeee |   15.22 |   14.74 |   14.15 |   15.22 |   15.09 |   14.10 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-special-cold         | #c6eaff |   15.63 |   15.15 |   14.53 |   15.64 |   15.50 |   14.48 |
| fg-special-mild         | #bfebe0 |   15.22 |   14.75 |   14.15 |   15.22 |   15.09 |   14.10 |
| fg-special-warm         | #f8dec0 |   15.24 |   14.77 |   14.17 |   15.25 |   15.12 |   14.12 |
| fg-special-calm         | #fbd6f4 |   15.08 |   14.61 |   14.02 |   15.08 |   14.95 |   13.97 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-main                 | #ffffff |   19.76 |   19.14 |   18.37 |   19.76 |   19.59 |   18.30 |
| fg-dim                  | #e0e6f0 |   15.76 |   15.27 |   14.65 |   15.76 |   15.63 |   14.60 |
| fg-alt                  | #a8a8a8 |    8.31 |    8.05 |    7.72 |    8.31 |    8.24 |    7.70 |
|-------------------------+---------+---------+---------+---------+---------+---------+---------|
| bg-main                 | #000000 |    1.06 |    1.10 |    1.14 |    1.06 |    1.07 |    1.15 |
| bg-dim                  | #110b11 |    1.02 |    1.02 |    1.06 |    1.02 |    1.01 |    1.06 |
| bg-alt                  | #181a20 |    1.14 |    1.10 |    1.06 |    1.14 |    1.13 |    1.05 |
#+TBLFM: $3='(clr $2 @1$3);%0.2f::$4='(clr $2 @1$4);%0.2f::$5='(clr $2 @1$5);%0.2f::$6='(clr $2 @1$6);%0.2f::$7='(clr $2 @1$7);%0.2f::$8='(clr $2 @1$8);%0.2f
```
