---
title: "Emacs: I am experimenting with a Denote cache"
excerpt: "Information about the experimental 'denote-data' feature I am working on."
---

[Isee 724 on the denote.git issue tracker](https://github.com/protesilaos/denote/issues/724)
prompted me to start an experiment for an optional, in-memory cache
for Denote. The cache can help speed up all sorts of operations.

The goal is to explore what can be done and whether it makes sense to
have that as a feature that users can enable, either directly in
`denote.el` or as a separate package.

For the time being, I have what I call `denote-data`:
<https://github.com/protesilaos/denote-data>. This is not for users
and does nothing useful right now. I have not written any
documentation on purpose. I am making it available as a
proof-of-concept in case there are interested parties who want to
contribute to the project.

What I have right now seems solid, though I suspect it will only be
useful at scale if the caching is done asynchronously. I plan to to
read the manual and check functions such as `list-packages` to
understand how we can do something in the background without blocking
Emacs.

If that is done, then the rest is a matter of (i) extending
`denote-data` to cover all cases where files need to be indexed and
(ii) plugging it into core Denote functions.

At any rate, this is an experiment. If it proves useful, then I will
do what is necessary to make it work with Denote as an opt-in feature.

## About Denote

Denote is a simple note-taking tool for Emacs. It is based on the idea
that notes should follow a predictable and descriptive file-naming
scheme. The file name must offer a clear indication of what the note
is about, without reference to any other metadata. Denote basically
streamlines the creation of such files while providing facilities to
link between them.

Denote's file-naming scheme is not limited to "notes".  It can be used
for all types of file, including those that are not editable in Emacs,
such as videos.  Naming files in a consistent way makes their
filtering and retrieval considerably easier.  Denote provides relevant
facilities to rename files, regardless of file type.

+ Package name (GNU ELPA): `denote`
+ Official manual: <https://protesilaos.com/emacs/denote>
+ Change log: <https://protesilaos.com/emacs/denote-changelog>
+ Git repositories:
  + GitHub: <https://github.com/protesilaos/denote>
  + GitLab: <https://gitlab.com/protesilaos/denote>
+ Video demo: <https://protesilaos.com/codelog/2022-06-18-denote-demo/>
+ Backronyms: Denote Everything Neatly; Omit The Excesses.  Don't Ever
  Note Only The Epiphenomenal.

