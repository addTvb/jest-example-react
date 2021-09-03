import React from "react";
import renderer from "react-test-renderer";
import { Link } from "./Link";

test("Link changes the class when hovered", () => {
    const component = renderer.create(
        <Link link="https://skillfactory.ru/">Skill Factory</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    console.log("tree: ", tree);
    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
