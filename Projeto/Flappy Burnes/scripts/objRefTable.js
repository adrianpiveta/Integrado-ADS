const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Fundo: 0},
	{Aviao: 0},
	{ObstaculoCima: 0},
	{ObstaculoBaixo: 0},
	{Touch: 0}
];

self.InstanceType = {
	Fundo: class extends self.ISpriteInstance {},
	Aviao: class extends self.ISpriteInstance {},
	ObstaculoCima: class extends self.ISpriteInstance {},
	ObstaculoBaixo: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {}
}