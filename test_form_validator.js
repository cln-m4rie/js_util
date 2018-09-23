import assert from 'assert';
import { exist, isAllZen, isAllHira, isAllKana, isAllUpperCaseAlphabet, isAllLowerCaseAlphabet, isAllAlphabet, isAllAlphaNumeric, isAllNumeric } from './form_validator';

describe('正常系', function () {
    it('値の存在チェック', function () {
        assert.ok(exist('abc'));
    });
    it('全てが全角かチェック', function () {
        assert.ok(isAllZen('あいうえお！；：＋ー〜＼'));
    });
    it('全てが平仮名かチェック', function () {
        assert.ok(isAllHira('こんにちは'));
    });
    it('全てが片仮名かチェック', function() {
        assert.ok(isAllKana('コンニチハ'));
    });
    it('全てが大文字アルファベットかチェック', function () {
        assert.ok(isAllUpperCaseAlphabet('ATOZ'));
    });
    it('全てが小文字アルファベットかチェック', function () {
        assert.ok(isAllLowerCaseAlphabet('atoz'));
    });
    it('全てがアルファベットかチェック', function () {
        assert.ok(isAllAlphabet('AtoZ'));
    });
    it('全てが半角英数字かチェック', function () {
        assert.ok(isAllAlphaNumeric('a2zToAtoZ'));
    });
    it('全てが半角数字かチェック', function () {
        assert.ok(isAllNumeric(12345678990));
    });
});