import path from "path";
import _ from "lodash";
import { GatsbyNode } from "gatsby";

interface GraphQLResult {
    data: {
        postsRemark: {
            edges: {
                node: {
                    frontmatter: {
                        slug: string;
                    };
                };
            }[];
        };
        tagsGroup: {
            group: {
                fieldValue: string;
            }[];
        };
    };
    errors?: any;
}

export const createPages: GatsbyNode["createPages"] = async ({
    actions,
    graphql,
    reporter,
}) => {
    const { createPage } = actions;
    const postTemplate = path.resolve(`src/templates/post.js`);
    const tagTemplate = path.resolve("src/templates/tag.js");

    const result = await graphql<GraphQLResult>(`
        {
            postsRemark: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/posts/" } }
                sort: { frontmatter: { date: DESC } }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            tagsGroup: allMarkdownRemark(limit: 2000) {
                group(field: { frontmatter: { tags: SELECT } }) {
                    fieldValue
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    // Create post detail pages
    const posts = (result?.data as any)?.postsRemark?.edges;

    posts.forEach(({ node }: any) => {
        createPage({
            path: node.frontmatter.slug,
            component: postTemplate,
            context: {}, // You can add more context if needed
        });
    });

    // Extract tag data from query
    const tags = (result?.data as any)?.tagsGroup.group;

    // Make tag pages
    tags.forEach((tag: any) => {
        createPage({
            path: `/pensieve/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue,
            },
        });
    });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
    stage,
    loaders,
    actions,
}) => {
    // Fix for third-party modules in SSR (Server-Side Rendering)
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null(),
                    },
                    {
                        test: /animejs/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }

    // Set up Webpack aliases for paths
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@config": path.resolve(__dirname, "src/config"),
                "@fonts": path.resolve(__dirname, "src/fonts"),
                "@images": path.resolve(__dirname, "src/images"),
                "@pages": path.resolve(__dirname, "src/pages"),
                "@styles": path.resolve(__dirname, "src/styles"),
                "@utils": path.resolve(__dirname, "src/utils"),
            },
        },
    });
};
