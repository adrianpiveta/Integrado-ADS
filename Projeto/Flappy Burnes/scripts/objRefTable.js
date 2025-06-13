const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Touch,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Cnds.OnResume
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Jogador: 0},
	{Touch: 0},
	{canoBaixo: 0},
	{TiledBackground: 0},
	{canoAlto9: 0},
	{canoAlto: 0},
	{Text: 0},
	{Sprite: 0},
	{Text2: 0},
	{TiledBackground2: 0},
	{Sprite2: 0},
	{Audio: 0},
	{pontos: 0}
];

self.InstanceType = {
	Jogador: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	canoBaixo: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	canoAlto9: class extends self.ISpriteInstance {},
	canoAlto: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {}
}