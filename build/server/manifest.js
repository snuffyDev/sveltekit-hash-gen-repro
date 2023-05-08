const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4d5f8729.js","app":"_app/immutable/entry/app.6edddf36.js","imports":["_app/immutable/entry/start.4d5f8729.js","_app/immutable/chunks/index.ccd4248b.js","_app/immutable/chunks/singletons.39f666a6.js","_app/immutable/entry/app.6edddf36.js","_app/immutable/chunks/index.ccd4248b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-19d1f390.js'),
			() => import('./chunks/1-209b0231.js'),
			() => import('./chunks/2-90b5878a.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
