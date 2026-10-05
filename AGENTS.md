<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep PurpleLotus marketing pages as TanStack routes with shared presentation and imported static Purple3 editorial/advisory data; this preserves source content without introducing an unnecessary backend.
- Label advisory data with its source snapshot date and link upstream records; the repository's GitHub Actions do not refresh this separate app automatically.
- Store user-provided site artwork as CDN asset pointers imported by routes; this keeps uploaded binaries out of the source repository.
