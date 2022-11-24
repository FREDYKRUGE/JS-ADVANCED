import { html } from "../../node_modules/lit-html/lit-html.js";

export async function catalogView(ctx) {
    const test = html`<p>Hello</p>`
    ctx.render(test)
    console.log('catalogView');
}